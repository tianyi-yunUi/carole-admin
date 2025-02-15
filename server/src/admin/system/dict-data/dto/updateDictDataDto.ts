import { BaseDomain } from "@/common/domain/BaseDomain"
import { Optional } from "@nestjs/common"
import { ApiProperty } from "@nestjs/swagger"
import { Transform } from "class-transformer"
import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class updateDictDataDto extends BaseDomain {
  @IsNotEmpty({ message: "字典数据id不能为空！" })
  @Transform((v) => +v.value)
  @IsNumber()
  dictCode: number
  @ApiProperty({ description: "字典类型" })
  @IsNotEmpty({ message: "字典类型不能为空" })
  @IsString()
  dictType: string
  @ApiProperty({ description: "数据标签" })
  @IsNotEmpty({ message: "数据标签不能为空" })
  @IsString()
  dictLabel: string
  @ApiProperty({ description: "数据键值" })
  @IsNotEmpty({ message: "数据键值不能为空" })
  @IsString()
  dictValue?: string
  @ApiProperty({ description: "样式属性" })
  @Optional()
  cssClass?: string
  @ApiProperty({ description: "回显样式" })
  @Optional()
  listClass?: string
  @ApiProperty({ description: "显示排序" })
  @IsNotEmpty({ message: "排序值不能为空" })
  @Transform((v) => +v.value)
  @IsNumber()
  dictSort: number
  @ApiProperty({ description: "字典状态（0停用，1正常）" })
  @Optional()
  status?: string = "1"
}