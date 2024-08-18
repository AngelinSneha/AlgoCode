# WebSocket Service for AlgoCode

This WebSocket service is designed to notify clients about the status of code execution. It works in conjunction with the [Algocode-Submission-Service](https://github.com/AngelinSneha/Algocode-Submission-Service) and the [AlgoCode-Frontend](https://github.com/AngelinSneha/AlgoCode-Frontend).

## Overview

The main aim of this WebSocket service is to provide real-time updates to the client on the status of code execution. When the submission service updates the status of a code problem, this WebSocket service sends a message to the connected client with the updated status.

## Feature

 Real-time notifications of code execution status

## Architecture

1. **Submission Service**: The [Algocode-Submission-Service](https://github.com/AngelinSneha/Algocode-Submission-Service) processes code submissions and updates their status.
2. **WebSocket Service**: This service receives updates from the submission service and sends real-time notifications to the client.
3. **Client**: The [AlgoCode-Frontend](https://github.com/AngelinSneha/AlgoCode-Frontend) connects to the WebSocket service to receive updates about the code execution status.
