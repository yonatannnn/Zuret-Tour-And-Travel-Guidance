import { NestMiddleware } from '@nestjs/common';
export declare class FileUploadMiddleware implements NestMiddleware {
    constructor();
    use(req: any, res: any, next: () => void): void;
}
