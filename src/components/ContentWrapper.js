import React from 'react'
import { Footer } from './Footer'
import { TopBar } from './TopBar'
import { ContentRowTop } from './ContentRowTop'
import { MoviesTable } from './MoviesTable'

export const ContentWrapper = () => {
  return (
    <div id="content-wrapper" className="d-flex flex-column">
			
        <div id="content">
            
            <TopBar/>				
            <ContentRowTop/>
            <MoviesTable/>
            				
        </div>			

        <Footer/>

	</div>		
  )
}
