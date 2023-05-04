import Content from "@/components/content";
import Layer from "@/components/layer";
import { NextSeo } from "next-seo";

const Products = () => {
    return (
        <Layer pageTitle="Products">
            <NextSeo 
                title="Products - Luke"
                openGraph={{
                    url: "https://luke256.dev/products"
                }}
            />
            <Content title="Products">
                Comming Soon...
            </Content>
        </Layer>
    )
}

export default Products