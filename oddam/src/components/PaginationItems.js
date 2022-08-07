const PaginationItems = ({currentItems, nr}) => {
    return (
        <>
            {currentItems &&
                currentItems.map((el) => (
                    <li key={el.name} className="fundations-list-el">
                        <div className="fundations-list-el-box">
                            <h3 className="fundations-list-el-box-title">{nr === 1 ? "Fundacja " : nr === 2 ? "Organizacja " : "Zbiórka "}"{el.name}"</h3>
                            <p className="fundations-list-el-box-desc">Cel i misja: {el.desc}</p>
                        </div>
                        <p className="fundations-list-el-items">{el.collects.join(", ")}</p>
                    </li>
                ))}
        </>
    );
}

export default PaginationItems;
