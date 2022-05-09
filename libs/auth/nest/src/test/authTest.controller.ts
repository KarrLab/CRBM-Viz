import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import {
  ApiOAuth2,
  ApiOperation,
  ApiOkResponse,
  ApiUnauthorizedResponse,
  ApiForbiddenResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AdminGuard } from '../lib/admin/admin.guard';
import { JwtGuard } from '../lib/jwt/jwt.guard';
import { permissions } from '../lib/permissions/permissions.decorator';
import { PermissionsGuard } from '../lib/permissions/permissions.guard';
import { ErrorResponseDocument } from '@biosimulations/datamodel/api';
import { scopes } from '@biosimulations/auth/common';

@ApiTags('Authentication testing')
@ApiOAuth2([])
@Controller('auth')
export class AuthTestController {
  @UseGuards(JwtGuard)
  @ApiOAuth2([])
  @ApiOperation({
    summary: 'Get information about the current user',
    description:
      'Returns information about the current user of the API, including their authentication token. This information may be helpful for debugging.',
  })
  @ApiOkResponse({
    description: 'Information of the current user was successfully retrieved',
  })
  @ApiUnauthorizedResponse({
    description: 'A valid authorization was not provided',
  })
  @Get('/loggedIn')
  loggedping(@Req() req: any) {
    return req.user;
  }

  @UseGuards(JwtGuard, AdminGuard)
  @ApiOAuth2([])
  @ApiOperation({
    summary: 'Check whether the user has administrative privileges',
    description: 'Check whether the user has administrative privileges',
  })
  @ApiOkResponse({
    description: 'The users privileges were successfully checked',
  })
  @ApiUnauthorizedResponse({
    description: 'A valid authorization was not provided',
  })
  @Get('/admin')
  adminping(@Req() req: any) {
    return req.user;
  }

  @permissions(scopes.permissions.test.id)
  @UseGuards(JwtGuard, PermissionsGuard)
  @ApiOAuth2([])
  @ApiOperation({
    summary: 'Check whether the user has privileges to use the secured parts of API',
    description: 'Check whether the user has privileges to use the secured parts of API',
  })
  @ApiOkResponse({
    description: 'The users privileges were successfully checked',
  })
  @ApiUnauthorizedResponse({
    type: ErrorResponseDocument,
    description: 'A valid authorization was not provided',
  })
  @ApiForbiddenResponse({
    type: ErrorResponseDocument,
    description: 'This account does not have permission to test permissions',
  })
  @Get('/permissions')
  testping(@Req() req: any) {
    return req.user;
  }
}
