export interface IContact{
    id:number;
    name:string;
    username:string;
    email:string;
    phone:string;
    website:string;
    address:IAddress;
    company:ICompany;
};
export interface ICompany{
    name:string;
    catchPhrase:string;
    bs:string,
}
export interface IAddress{
    street:string;
    suite:string;
    city:string;
    zipcode:string;
    gio:IGeo;
}

export interface IGeo{
    lat:string;
    lng:string;
}