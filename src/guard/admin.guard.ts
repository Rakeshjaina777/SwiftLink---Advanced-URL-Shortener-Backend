// src/guards/admin.guard.ts

import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const isAdmin = this.reflector.get<boolean>(
      'isAdmin',
      context.getHandler(),
    );
    if (!isAdmin) {
      return true; // No admin check required
    }

    // Implement your admin authentication logic here (e.g., check the request for a role)
    const request = context.switchToHttp().getRequest();
    const user = request.user; // Assume user info is attached to request by auth middleware
    return user && user.role === 'admin'; // Only allow if user is an admin
  }
}
