import { RoomsService } from './rooms.service';
export declare class RoomsController {
    private readonly roomsService;
    constructor(roomsService: RoomsService);
    addrooms(roomCompanyId: string, roomType: string, roomImagePath: string, roomPrice: number, roomRented: boolean): Promise<{
        message: string;
        path: string;
        "companyId is": string;
    }>;
    getRoomById(roomId: string): Promise<import("./Room.Model").Room>;
    getAllRooms(): Promise<(import("./Room.Model").Room & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    deleteRoom(roomId: string): Promise<any>;
    updatePrice(id: string, roomPrice: number): Promise<import("./Room.Model").Room>;
}
