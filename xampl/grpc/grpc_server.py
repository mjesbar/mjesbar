import logging

import grpc
import grpc_pb2
import grpc_pb2_grpc

from concurrent import futures


logging.basicConfig(level=logging.INFO)


class MessageEchoServicer(grpc_pb2_grpc.MessageEchoServicer):
    def ServerEcho(self, request, context):
        logging.info(f"Server received: {request}")
        response = grpc_pb2.ServerResponse(message=request.message)
        logging.info(f"Server responded: {response}")
        return response
    
    def ServerEchoStream(self, request, context):
        logging.info(f"Server received: {request}")
        for i in range(10):
            response = grpc_pb2.ServerResponse(message=request.message)
            logging.info(f"Server responded: {response}")
            yield response
            # return iter([response for i in range(10)])  # This will return only one response

    def ServerEchoClientStream(self, request_iterator, context):
        for request in request_iterator:
            logging.info(f"Server received: {request}")
            response = grpc_pb2.ServerResponse(message=request.message)
        logging.info(f"Server responded: {response}")
        return response
    
    def ServerEchoStreamClientStream(self, request_iterator, context):
        for request in request_iterator:
            logging.info(f"Server received: {request}")
            response = grpc_pb2.ServerResponse(message=request.message)
            logging.info(f"Server responded: {response}")
            yield response
            # return iter([response for i in range(10)])  # This will return only one response

    
def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    grpc_pb2_grpc.add_MessageEchoServicer_to_server(
        MessageEchoServicer(), server
    )
    server.add_insecure_port("[::]:50051")
    server.start()
    server.wait_for_termination()

if __name__ == "__main__":
    logging.info("Server started at localhost:50051")
    serve()