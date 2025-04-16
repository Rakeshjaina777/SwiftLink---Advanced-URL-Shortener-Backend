import { IsString, IsUrl } from "class-validator";




export class CreateUrlDto {

    @IsString()
    @IsUrl()
    originalurl: string;



}
