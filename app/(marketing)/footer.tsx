"use client"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons"

const languages=[
    {
        name:"Swahili",
        code:"sw",
        flag:"🇹🇿"
    },
    {
        name:"Arabic",
        code:"ar",
        flag:"🇸🇦"
    } ,
    {
        name:"Bengali",
        code:"bn",
        flag:"🇧🇩"
    },
    {
        name:"Czech",
        code:"cs",
        flag:"🇨🇿"
    },
    {
        name:"German",
        code:"de",
        flag:"🇩🇪"
    },
    {
        name:"Greek",
        code:"el",
        flag:"🇬🇷"
    },
    {
        name:"English",
        code:"en",
        flag:"🇬🇧"
    },
    {
        name:"Spanish",
        code:"es",
        flag:"🇪🇸"
    },
    {
        name:"French",
        code:"fr",
        flag:"🇫🇷"
    },
    {
        name:"Hindi",
        code:"hi",
        flag:"🇮🇳"
    },
    {
        name:"Hungarian",
        code:"hu",
        flag:"🇭🇺"
    },
    {
        name:"Indonesian",
        code:"id",
        flag:"🇮🇩"
    },
    {
        name:"Italian",
        code:"it",
        flag:"🇮🇹"
    },
    {
        name:"Japanese",
        code:"ja",
        flag:"🇯🇵"
    },
    {
        name:"Korean",
        code:"ko",
        flag:"🇰🇷"
    },
    {
        name:"Dutch",
        code:"nl",
        flag:"🇳🇱"
        
    },
    {
        name:"Polish",
        code:"pl",
        flag:"🇵🇱"
    },
    {
        name:"Portuguese",
        code:"pt",
        flag:"🇵🇹"
    },
    {
        name:"Romanian",
        code:"ro",
        flag:"🇷🇴"
    },
    {
        name:"Russian",
        code:"ru",
        flag:"🇷🇺"
    },
    {
        name:"Thai",
        code:"th",
        flag:"🇹🇭"
    },
    {
        name:"Tagalog",
        code:"tl",
        flag:"🇹🇭"
    },
    {
        name:"Turkish",
        code:"tr",
        flag:"🇹🇷"
    },
    {
        name:"Ukrainian",
        code:"uk",
        flag:"🇺🇦"
    },
    {
        name:"Vietnamese",
        code:"vi",
        flag:"🇻🇳"
    },
    {
        name:"Chinese",
        code:"zh",
        flag:"🇨🇳"
    }
]
export const  Footer = () =>{
    const [pageIndex, setPageIndex] = useState(0)
    const itemsPerPage = 5
    const totalPages = Math.ceil(languages.length / itemsPerPage);

const handlePrevPage = () => {
    if (pageIndex > 0) {
        setPageIndex(pageIndex - 1);
    }
};

const handleNextPage = () => {
    if (pageIndex < totalPages - 1) {
        setPageIndex(pageIndex + 1);
    }
}
return(
    <footer className=" hidden lg:block h-20 w-full border-t-2 border-slate-200 p-4 ">
        <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
            <button onClick={handlePrevPage} disabled={pageIndex === 0}>
                <ChevronLeftIcon/>
            </button>
            {languages.slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage).map((language) => (
                    <Button key={language.code} variant="ghost" size="lg">
                        <span className="mr-4 rounded-md">{language.flag}</span>
                        <span>{language.name}</span>
                    </Button>
                ))}  
            <button onClick={handleNextPage} disabled={pageIndex === totalPages - 1}>
                <ChevronRightIcon scale={10}/>
            </button>
        </div>
    </footer>
)
}