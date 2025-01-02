import { Spin, Image } from 'antd';
import '../index.css'
interface lazyLoadImage {
    src: string;
    alt: string;
}
export const LazyImageWithPlaceholder = ({ src, alt }: lazyLoadImage) => {

    return (
        <div >
            <Image
                width={350}
                height={500}
                src={src}
                alt={alt}
                style={{
                    borderRadius: "90px"
                }}
                placeholder={
                    <div className="flex justify-center items-center w-full h-full">
                        <Spin
                            size="large"
                            className="custom-spin"
                        />
                    </div>
                }
            />
        </div>
    );
};


