import { ClinentMessage, ServerMessage } from 'src/proto/pii_pb';
import { PackageDefinition, Options } from '@grpc/proto-loader';
import { GrpcStreamClient } from '../proto/pii_grpc_pb';

import * as I from '../index';

export { ClinentMessage, ServerMessage, GrpcStreamClient };
export function createProtoPackage(path: './src/proto/pii.proto', options: Options): PackageDefinition;
export declare class PIIServer extends I.PIIServer {}
