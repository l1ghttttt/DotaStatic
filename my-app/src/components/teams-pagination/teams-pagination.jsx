import React from 'react';
import './teams-pagination.css'

const TeamsPagination = ({teamsPerPage, totalTeams, Paginate, currentPage}) => {

    const pageNumbers = []

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