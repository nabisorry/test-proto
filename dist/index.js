"use strict";
/* eslint-disable @typescript-eslint/explicit-function-return-type */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrpcStreamService = exports.GrpcStreamClient = exports.ServerMessage = exports.ClinentMessage = exports.PIIServer = void 0;
var index_1 = require("./server/index");
Object.defineProperty(exports, "PIIServer", { enumerable: true, get: function () { return __importDefault(index_1).default; } });
var pii_pb_1 = require("./proto/pii_pb");
Object.defineProperty(exports, "ClinentMessage", { enumerable: true, get: function () { return pii_pb_1.ClinentMessage; } });
Object.defineProperty(exports, "ServerMessage", { enumerable: true, get: function () { return pii_pb_1.ServerMessage; } });
var pii_grpc_pb_1 = require("./proto/pii_grpc_pb");
Object.defineProperty(exports, "GrpcStreamClient", { enumerable: true, get: function () { return pii_grpc_pb_1.GrpcStreamClient; } });
Object.defineProperty(exports, "GrpcStreamService", { enumerable: true, get: function () { return pii_grpc_pb_1.GrpcStreamService; } });
//# sourceMappingURL=index.js.map