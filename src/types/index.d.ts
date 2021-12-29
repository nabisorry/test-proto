import * as P from '../proto/pii_grpc_pb';
import * as B from '../proto/pii_pb';

import * as I from '../index';

export declare const GrpcStreamService: P.IGrpcStreamService;
export declare class PIIServer extends I.PIIServer {}
export declare class GrpcStreamClient extends P.GrpcStreamClient {}
export declare class ClientMessage extends B.ClientMessage {}
export declare class ServerMessage extends B.ServerMessage {}
