import { IsOptional, IsPositive, Min, IsNumber } from 'class-validator'

export class PaginationDto {
	
	@IsOptional()
	@IsPositive() // Podria ser 0 por eso ponemos el Min(1)
	@IsNumber()
	@Min(1)
	limit?: number
	
	@IsOptional()
	@IsNumber()
	@IsPositive()
	offset?: number
	
}