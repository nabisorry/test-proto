"use strict";
/* eslint-disable @typescript-eslint/explicit-function-return-type */
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrpcStreamService = exports.GrpcStreamClient = exports.ServerMessage = exports.ClientMessage = void 0;
var pii_pb_1 = require("./proto/pii_pb");
Object.defineProperty(exports, "ClientMessage", { enumerable: true, get: function () { return pii_pb_1.ClientMessage; } });
Object.defineProperty(exports, "ServerMessage", { enumerable: true, get: function () { return pii_pb_1.ServerMessage; } });
var pii_grpc_pb_1 = require("./proto/pii_grpc_pb");
Object.defineProperty(exports, "GrpcStreamClient", { enumerable: true, get: function () { return pii_grpc_pb_1.GrpcStreamClient; } });
Object.defineProperty(exports, "GrpcStreamService", { enumerable: true, get: function () { return pii_grpc_pb_1.GrpcStreamService; } });
//# sourceMappingURL=index.js.map