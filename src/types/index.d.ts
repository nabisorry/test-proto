import { PackageDefinition, Options } from '@grpc/proto-loader';
import * as P from '../proto/pii_grpc_pb';
import * as B from '../proto/pii_pb';

import * as I from '../index';

export function createProtoPackage(path: './src/proto/pii.proto', options: Options): PackageDefinition;
export declare class PIIServer extends I.PIIServer {}
export declare class GrpcStreamClient extends P.GrpcStreamClient {}
export declare class ClinentMessage extends B.ClinentMessage {}
export declare class ServerMessage extends B.ServerMessage {}
