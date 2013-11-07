mmo.js
======

An MMO client/server framework using node.js and HTML5

Structure
======

In mmo.js, all game objects are represented as Entity objects. These objects are dynamically typed for storing game data (a player's name, or an enemies health). An entity contains a Connection object. This object can either be a physical connection via sockets, usually for player entities, or to a virtual connection extension class. These extension-connections define the "language" that the entity uses. A fighting rat entity may have a virtual connection defined to listen for "sword hit" events, and it may dispatch "bite player" events.
