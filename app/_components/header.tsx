import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react"

const Header = () => {
    return ( 
        <Card className="m-5">
            <CardContent className="p-5 justify-between flex items-center">
                <Image src="/Logo.svg" alt="FSW Barber" height={50} width={50}/>

                <Button variant="outline" size="icon">
                    <MenuIcon size={30} />
                </Button>
            </CardContent>
        </Card>
    );
}
 
export default Header;