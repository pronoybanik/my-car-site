import { useEffect, useState } from "react"

const useSeller = email => {
    const [sellers, setSellers] = useState(false);
    const [sellerLoading, setSellerLoading] = useState(true)
    useEffect(() => {
        if (email) {
            fetch(`https://car-server-site.vercel.app/users/sellers/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setSellers(data.isSeller)
                    setSellerLoading(false)
                })
        }
    }, [email])
    return [sellers, sellerLoading]
}
export default useSeller;