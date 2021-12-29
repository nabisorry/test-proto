'use strict';
/* eslint-disable @typescript-eslint/explicit-function-return-type */
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.GrpcStreamService = exports.GrpcStreamClient = exports.PIIServer = void 0;
// import * as grpc from '@grpc/grpc-js';
// import * as protoLoader from '@grpc/proto-loader';
// import { GrpcStreamClient } from './proto/pii_grpc_pb';
// const PROTO_PATH = './src/proto/pii.proto';
// export interface GrpcAcessorOption {
//     protoPath: string;
//     protoLoaderOption: protoLoader.Options;
// }
// const DEFAULT_OPTIONS: GrpcAcessorOption = {
//     protoPath: './src/proto/pii.proto',
//     protoLoaderOption: {
//         keepCase: true,
//         longs: String,
//         enums: String,
//         defaults: true,
//         oneofs: true,
//     },
// };
// class GrpcController {
//     packageDefinition: protoLoader.PackageDefinition;
//     protoDescriptor: any;
//     constructor(options = DEFAULT_OPTIONS) {
//         const { protoPath, protoLoaderOption } = options;
//         this.packageDefinition = protoLoader.loadSync(protoPath, protoLoaderOption);
//         this.protoDescriptor = grpc.loadPackageDefinition(this.packageDefinition);
//     }
//     serverStart(bindAddress = 'localhost:7777') {
//         const server = new grpc.Server();
//         // @ts-ignore
//         server.addService(GrpcStreamService, new PIIServer());
//         server.bindAsync(bindAddress, grpc.ServerCredentials.createInsecure(), (err, port) => {
//             if (err) {
//                 throw err;
//             }
//             console.log(`Listening on ${port}`);
//             server.start();
//         });
//         return server;
//     }
// }
// const ab = new GrpcController();
// const a = ab.serverStart();
// export const createProtoPackage = (options = DEFAULT_OPTIONS): protoLoader.PackageDefinition => {
//     return protoLoader.loadSync(PROTO_PATH, options);
// };
var index_1 = require('./server/index');
Object.defineProperty(exports, 'PIIServer', {
    enumerable: true,
    get: function () {
        return __importDefault(index_1).default;
    },
});
var pii_grpc_pb_1 = require('../src/proto/pii_grpc_pb');
Object.defineProperty(exports, 'GrpcStreamClient', {
    enumerable: true,
    get: function () {
        return pii_grpc_pb_1.GrpcStreamClient;
    },
});
Object.defineProperty(exports, 'GrpcStreamService', {
    enumerable: true,
    get: function () {
        return pii_grpc_pb_1.GrpcStreamService;
    },
});
//# sourceMappingURL=index.js.map
