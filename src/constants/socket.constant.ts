import React from 'react';
import { io, Socket } from 'socket.io-client';
import config from '@/config';

export const socket = io(config.API_URL, { autoConnect: false });

export const SocketContext = React.createContext<Socket>(socket);
