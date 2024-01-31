// file-upload.middleware.ts
import { Injectable, NestMiddleware } from '@nestjs/common';
import * as multer from 'multer';

@Injectable()
export class FileUploadMiddleware implements NestMiddleware {
  constructor() {}

  use(req: any, res: any, next: () => void) {
    const storage = multer.memoryStorage();
    const upload = multer({ storage }).single('car-image');

    upload(req, res, (err) => {
      if (err instanceof multer.MulterError) {
        res.status(500).send('Multer error');
      } else if (err) {
        res.status(500).send('Unknown error');
      } else {
        next();
      }
    });
  }
}
