const { Op, where } = require('sequelize');
const {NotificiationTicket}=require('../models/index')

class TicketRepository {
    async create (data){
        try {
             
            const response=await NotificiationTicket.create(data)
            return response;

        } catch (error) {
            throw error
        }
    }    
    async getAll(){
        try {
            const tickets=await NotificiationTicket.findAll();
            return tickets;
        } catch (error) {
            throw error
        }
    }

        async getPending( timestamp){
        try {
            const tickets=await NotificiationTicket.findAll(
                {
                    where:{
                        notificationTime:{
                            [Op.lte]:timestamp
                        },
                           status: {
                           [Op.in]: ["PENDING", "FAILED"]
                        }
                    },
                        order:[['notificationTime','ASC']]
                }
            );
            return tickets;
        } catch (error) {
            throw error
        }
    }

    async updateStatus(data,id){
        try {
           const response= await NotificiationTicket.update(
            data,
           { where:{
                id:{[Op.eq]:id}
            }}
           ) 
            
           return response
        } catch (error) {
            throw error
            
        }
    }
}

module.exports = TicketRepository;
