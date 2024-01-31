import { Model } from 'mongoose';
import { Room } from './Room.Model';
export declare class RoomsService {
    private readonly roomModel;
    constructor(roomModel: Model<Room>);
    addRoom(companyId: string, roomType: string, roomImagePath: string, roomPrice: number): Promise<string>;
    getOneRoom(id: string): Promise<Room>;
    getAllRooms(): Promise<(Room & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    updatePrice(id: string, price: number): Promise<Room>;
    deleteRoom(id: string): Promise<void>;
    private findProduct;
}
