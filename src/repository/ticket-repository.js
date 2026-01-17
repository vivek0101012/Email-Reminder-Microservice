const { Op, where } = require('sequelize');

class TicketRepository {

    constructor(NotificiationTicket){
        this.NotificiationTicket=NotificiationTicket
    }

    async create (data){
        try {
             
            const response=await this.NotificiationTicket.create(data)
            return response;

        } catch (error) {
            throw error
        }
    }    
    async getAll(){
        try {
            const tickets=await this.NotificiationTicket.findAll();
            console.log(tickets)
            return tickets;
        } catch (error) {
            throw error
        }
    }

        async getPending( timestamp){
        try {
            const tickets=await this.NotificiationTicket.findAll(
                {
                    where:{
                        notificationTime:{
                            [Op.lte]:timestamp
                        },
                           status: {
                           [Op.in]: ["PENDING", "RETRY"]
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

    async updateStatus(id,data){
        try {
            await this.NotificiationTicket.update(
            data,
           { where:{
                id:{[Op.eq]:id}
            }}
           ) 
  
            
        } catch (error) {
            throw error
            
        }
    }
}

module.exports = TicketRepository;
