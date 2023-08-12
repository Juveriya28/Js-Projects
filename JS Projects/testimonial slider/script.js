(function(){
    const customerImage=document.querySelector("#customer-img")
    const customerName=document.querySelector("#customer-name")
    const customerText=document.querySelector("#customer-text")

    const btn=document.querySelectorAll(".btn")

    let index= 0
    const customers=[]

    function Customer(img,name,text){
        this.img=img
        this.name=name
        this.text=text

    }

    function createCustomer(img , name , text){
        let Img = `./${img}.jpg`
        let customer = new Customer(Img,name,text)

        customers.push(customer)
    }

    createCustomer(1,'Amelia','The Food we had enjoyed at the time of dinner. It was really delicious taste with great quality, everything had unique taste which we had ordered, nice arrangement and services from the staff while eating, we found nothing bad about this hotel')

    createCustomer(2,'Naina','We visited this place for breakfast and dinner. The place is very conveniently located with ample parking space. The food at both the meals was tasty and definitely worth the price. Good quantity served per portion. Service as also good. Overall , a good place to have food when staying in Vythiri. Would recommend it definitely')

    createCustomer(3,'Kane','I and my friend had dinner here one of the nights we were in Kalpetta. The ambiance was good and the food recommendations were great. We had a traditional Arabian rice and chicken preparation, Kuzhi Manthi. It was our first experience having this dish, and although a bit dry, it tasted great. Would recommend this place thats easily noticed from a vehicle and has ample parking')

    createCustomer(4,'Lilly','We visited twice this restaurant while our stay at vythri village resort ,had very tasty food and service was aldo good.Overall nice experience')
    
    createCustomer(5,'Matthew','Very nice breakfast place.Food was good.Presentation could be a little more creative ,but other than that,I would eat here again.Service was good as well')

    createCustomer(6,'Joshua','Need more choices,and in the morning should open before 7:30.It needs to either have a buffet service or faster serving time.It also needs to reduce mistakes in taking orders')


    btn.forEach(function(button){
        button.addEventListener('click',function(e){
            // for previous arrow
            if(e.target.parentElement.classList.contains('prevBtn')){
                if(index===0){
                    index=customers.length
                }
                index--
                customerImage.src=customers[index].img
                customerName.textContent=customers[index].name
                customerText.textContent=customers[index].text
            }
            // for next arow
            if(e.target.parentElement.classList.contains('nextBtn')){
                index++
                if(index=== customers.length){
                    index=0
                }
                customerImage.src=customers[index].img
                customerName.textContent=customers[index].name
                customerText.textContent=customers[index].text
            }
        })
    })

})()