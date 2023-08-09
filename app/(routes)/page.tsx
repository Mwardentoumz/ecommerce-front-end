import Container from "@/components/ui/container"
import Billboard from "@/components/ui/billboard"
import ProductList from "@/components/product-list"


import getBillboard from "@/actions/get-billboard"
import getProducts from "@/actions/get-products"

export const revalidate = 0

const HomePage = async () => {

    const products = await getProducts({ isFeatured: true })
    const billboard = await getBillboard('1e7aaf9c-e296-45a9-b65f-cee3d74c5d2e')

    console.log(billboard)

    return (
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard
                    data={billboard}
                />

                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                    <ProductList title="Featured Products" items={products} />
                </div>
            </div>
        </Container>
    )
}

export default HomePage