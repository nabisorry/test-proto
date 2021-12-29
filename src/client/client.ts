import * as grpc from '@grpc/grpc-js';
import { GrpcStreamClient } from '../proto/pii_grpc_pb';

new GrpcStreamClient('abc', grpc.credentials.createInsecure());
