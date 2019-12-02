//create array of company names
const companies = [
    {name: "Rose", category: "Fashion", start:"2010" , end:"2013"},
    {name: "Cherry Blossom", category: "Flower", start:"2000" , end:"2009"},
    {name: "Lilies", category: "Tech", start:"1990" , end:"1998"},
    {name: "Erudite", category: "Legal", start:"2010" , end:"2018"},
    {name: "Codify", category: "Tech", start:"2012" , end:"2015"},
    {name: "Sakura", category: "Flower", start:"2017" , end:"2018"},
    {name: "Dynamite", category: "Legal", start:"2015" , end:"2019"},
    {name: "Aloe", category: "Flower", start:"2002" , end:"2007"},
    {name: "Symphony", category: "Fashion", start:"2016" , end:"2018"}    

]

const ages = [33,12,20,16,5,54,21,44,61,13,15,45,25,64,32]; 

const companyNames = companies.map(function(company){
    return company.name;
}); 