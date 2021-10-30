import React from 'react'
import ProductCard from '../product-card/product-card'
import '../collection-preview/collection-preview.css'
import { Container, Stack } from 'react-bootstrap'


const CollectionPreview = ({ id, title, items }) => {
    return (
        
        <Container>
            <div key={id} className='collection-preview'>
                <h1 className='title'>{title}</h1>
                <div className='preview'>
                    <Stack direction="horizontal" gap={3}>
                        {
                            items
                                .filter((item, index) => index < 4)
                                .map(({ id, ...productCardProps }) => (
                                    <ProductCard key={id} {...productCardProps} ></ProductCard>
                                ))
                        }
                    </Stack>
                </div>
            </div>
        </Container>
    );
}

export default CollectionPreview;


