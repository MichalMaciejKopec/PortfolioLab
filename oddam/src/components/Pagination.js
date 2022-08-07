import {useEffect, useState} from "react";
import ReactPaginate from "react-paginate";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../firebaseConfig";
import PaginationItems from "./PaginationItems";

const Pagination = ({itemsPerPage, nr}) => {
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const [fund, setFund] = useState([]);

    useEffect(() => {
        let coll;
        switch (nr){
            case 1:
                coll="fundations";
                break;
            case 2:
                coll="organizations";
                break;
            case 3:
                coll="local";
                break;
        }
        getData(nr,coll);
    }, [nr])

    const getData = async (nr,coll) => {
        const querySnapshot = await getDocs(collection(db, coll));
        let temp = [];
        querySnapshot.forEach((doc) => {
            temp.push(doc.data());
        });
        switch (nr) {
            case 1:
                setFund(temp.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)));
                break;
            case 2:
                setFund(temp.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)));
                break;
            case 3:
                setFund(temp.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)));
                break;
        }

    }

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(fund.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(fund.length / itemsPerPage));
    }, [fund, itemOffset, itemsPerPage]);

    const handlePageClick = (e) => {
        const newOffset = (e.selected * itemsPerPage) % fund.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            <PaginationItems currentItems={currentItems} nr={nr}/>
            {fund.length<=3?<></>:
                <ReactPaginate
                breakLabel="..."
                nextLabel=""
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel=""
                renderOnZeroPageCount={null}
            />}

        </>
    );
}

export default Pagination;
