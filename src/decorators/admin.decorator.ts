// src/decorators/admin.decorator.ts

import { SetMetadata } from '@nestjs/common';

export const Admin = () => SetMetadata('isAdmin', true);
