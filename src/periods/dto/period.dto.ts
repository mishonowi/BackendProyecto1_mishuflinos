import { ApiProperty, ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsBoolean, IsDateString, IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { PaginationQueryDto } from '../../common/dto/pagination-query.dto';
import { toBoolean } from '../../common/dto/query-helpers';
import { PeriodStatus } from '../schemas/period.schema';

export class CreatePeriodDto {
  @ApiProperty({ example: '2026-2' })
  @IsString()
  @IsNotEmpty()
  code!: string;

  @ApiProperty({ example: '2026-08-01' })
  @IsDateString()
  startDate!: string;

  @ApiProperty({ example: '2026-12-15' })
  @IsDateString()
  endDate!: string;
}

export class UpdatePeriodDto extends PartialType(CreatePeriodDto) {
  @ApiPropertyOptional({
    enum: [PeriodStatus.Planned, PeriodStatus.Open],
    description: 'Para cerrar un periodo usa POST /periods/:id/close; un periodo cerrado no se puede reabrir',
  })
  @IsOptional()
  @IsEnum(PeriodStatus)
  status?: PeriodStatus;
}

export class ClosePeriodQueryDto {
  @ApiPropertyOptional({ description: 'true = cancela las matriculas activas sin finalizar y cierra igual' })
  @IsOptional()
  @Transform(toBoolean)
  @IsBoolean()
  cancelPending?: boolean;
}

export class PeriodsQueryDto extends PaginationQueryDto {
  @ApiPropertyOptional({ enum: PeriodStatus, description: 'Filtrar por estado' })
  @IsOptional()
  @IsEnum(PeriodStatus)
  status?: PeriodStatus;
}
