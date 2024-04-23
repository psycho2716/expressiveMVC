//! Note: Do not delete this Router

const express = require("express");
const fs = require("fs");
const path = require("path");

class Route {
    constructor() {
        this.app = express();
        this.routes = {};
    }

    loadRoutes(routeDir) {
        const routeFiles = fs.readdirSync(routeDir);
        routeFiles.forEach(file => {
            const routes = require(path.join(routeDir, file));
            if (Array.isArray(routes)) {
                routes.forEach(route => {
                    if (route && route.path && route.controller) {
                        this.route(route.path, route.controller, route.name);
                    }
                });
            }
        });
    }

    method(method) {
        this.currentMethod = method.toLowerCase();
        return this; // Allow method chaining
    }

    route(route, controllerMethod) {
        if (this.currentMethod === "get") {
            this.app.get(route, controllerMethod);
        } else if (this.currentMethod === "post") {
            this.app.post(route, controllerMethod);
        } else {
            throw new Error(`Unsupported HTTP method: ${this.currentMethod}`);
        }

        return this; // Allow method chaining
    }

    name(name) {
        return this.routes[name];
    }

    getApp() {
        return this.app;
    }
}

module.exports = new Route();
