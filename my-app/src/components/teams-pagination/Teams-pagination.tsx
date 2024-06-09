import * as React from "react";
import './teams-pagination.css'
interface ITeamsPaginationProps {
    teamsPerPage: number;
    totalTeams: number;
    currentPage: number;
    Paginate: (pageNumber: number) => void
}

const TeamsPagination: React.FC<ITeamsPaginationProps>  = ({teamsPerPage, totalTeams, Paginate, currentPage}) => {

    const pageNumbers: Array<number> = []

    for (let i = 1; i <= Math.ceil(totalTeams / teamsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div>
            <ul className={`pagination`}>
                {
                    pageNumbers.map((pageNumber, i) => {
                        if (pageNumber === currentPage) {
                            return (
                                <div key={i} className={`pagination-block`} style={{color: 'white', borderBottom: '4px solid white'}}
                                     onClick={() => Paginate(pageNumber)}>
                                    {pageNumber}
                                </div>
                            )
                        } else return (
                            <div key={i} className={`pagination-block`}
                                 onClick={() => Paginate(pageNumber)}>{pageNumber}</div>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default TeamsPagination;