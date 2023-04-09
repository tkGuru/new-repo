import React from "react";


function TopList({ setMovieId, setLoading }) {
 


  return (
    <div className="list">
			<div class="list__trending">
				<h4>Top Rated Movies</h4>
				<div class="list__items">
					
						<div class="list__item">
							<img src="data:image/jpeg;base64,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" alt=""/>
							<div className="list__itemInfo">
								<h5 className="list__itemTitle">Title<span className="list__itemYear">Year</span></h5>
								
								<div className="list__rating">
					
									<small className="list__likes">*****</small>
								</div>
							</div>
						</div>
					
				</div>
			</div>

			

		</div>
  );
}

export default TopList;
