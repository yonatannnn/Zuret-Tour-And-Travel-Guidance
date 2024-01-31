import { Controller, Post , Body , Get , Param , Delete} from '@nestjs/common';
import { ExpenseService } from './expense.service';

@Controller('expenses')
export class ExpenseController {
    constructor(private readonly expensesService : ExpenseService){}
    @Post()
    async addcars(
        @Body('userId') carCompanyId : string,
        @Body('prodId') carBrand: string,
        @Body('reason') carImagePath: string,
        @Body('price') carPrice: number,
){
    const generated_path = await this.expensesService.addExpense(carCompanyId , carBrand, carImagePath, carPrice);
    return { message: 'Car added successfully', path: generated_path  , "companyId is" : carCompanyId};
}

@Get()
async getAllCars(){
    const carsArray = this.expensesService.getAllExpenses();
    return carsArray;
}

@Get(':id')
    async getCarById(@Param('id') expenseId : string){
        const result = this.expensesService.getOneExpense(expenseId);
        return result;

    }


    @Delete(':id')
    async deleteCar(@Param('id') carId : string){
        await this.expensesService.deleteCar(carId);
        return null;
    }

}
