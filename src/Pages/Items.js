import React from 'react'

function PackagingList({ isPacked, name }) {

    return (
        <li>
            {
                isPacked ? (name + ' done') : (name)
            }
        </li>
    )

}

const Items = () => {
    return (
        <div>
            <h2>Packed List </h2>
            <section style={{ display: 'inline-block' }}>
                <ul>
                    <PackagingList
                        isPacked={false}
                        name='Item 1' />
                    <PackagingList
                        isPacked={true}
                        name='Item 2' />
                    <PackagingList
                        isPacked={true}
                        name='Item 3' />
                </ul>
            </section>
        </div>
    )
}

export default Items
