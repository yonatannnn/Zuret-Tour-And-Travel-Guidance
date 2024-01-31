import { Injectable , NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Expense } from './Expense.Model';


@Injectable()
export class ExpenseService {
    constructor(@InjectModel('Expense') private readonly expenseModel: Model<Expense>) {}

    async addExpense( userId:string , productId: string , reason : string , price: number){
      const newExpense = new this.expenseModel({
            userId : userId,
            prodId : productId,
          reason: reason,
          price: price,
          date : new Date().toISOString()
      });
      const result = await newExpense.save();
      return result.price;
    }

    async getAllExpenses(){
        const cars = await this.expenseModel.find().exec();
        return cars;
      }

      async getOneExpense(id: string){
        const result = await this.findProduct(id);
        return result.reason;
      }

      async deleteCar(id: string) {
        try {
            const result = await this.expenseModel.deleteOne({ _id: id }).exec();
    
            if (result.deletedCount === 1) {
                console.log(`Car with ID ${id} deleted successfully.`);
            } else {
                console.log(`Car with ID ${id} not found.`);
            }
        } catch (error) {
            console.error(`Error deleting car with ID ${id}:`, error);
        }
    }

      private async findProduct(id: string): Promise<Expense> {
        let car;
        try {
          car = await this.expenseModel.findById(id).exec();
        } catch (error) {
          throw new NotFoundException('Could not find product. ');
        }
        if (!car) {
          throw new NotFoundException('Could not find product.');
        }
        return car;
      }



    

}
