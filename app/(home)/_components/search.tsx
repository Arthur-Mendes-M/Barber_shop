"use client";

import { Button } from "@/app/_components/ui/button";
import { Input } from "@/app/_components/ui/input";
import { SearchIcon } from "lucide-react";

const Search = () => {
    return ( 
        <div className="flex items-center">
            <Input className="rounded-none rounded-l-lg" placeholder="Busque por uma barbearia..." />
            <Button variant="default" size="icon" className="rounded-none rounded-r-lg">
                <SearchIcon size={20} />
            </Button>
        </div>
    );
}
 
export default Search;