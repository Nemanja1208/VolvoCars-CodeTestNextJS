'use client';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Card, Text, Spacer, Logo, Flex, Icon } from 'vcc-ui';
import "../../../public/css/styles.css";

type carIdProperties = {
    params: {
        carId: string;
    }
}

const allCarIds = [
  "s60-recharge", "s90-recharge", "v60-recharge", "v90-recharge", "xc40-bev", "xc40-recharge", "xc60-recharge", "xc90-recharge"
];

export default function individualCarID({params : { carId }} : carIdProperties) {
  if(!allCarIds.includes(carId)) return notFound();
  return (
    <div>
      <Logo type="spreadmark" height={16} />
      <Link className='linkStyle' href={`/`}><Icon type="navigation-arrowback-40" /></Link>
      <Spacer />
      <Flex extend={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          padding: "15px",
          width: "90vw"
        }}>
          <Card className="cardDetailStyle">
              <Spacer />
              <Text variant="kelly" fg={'foreground.secondary'} subStyle={'emphasis'}> LEARN </Text>
              <Spacer />
              <Icon type="car-car-24" />
              <Spacer />
              <Text variant="cook" fg={'foreground.secondary'} subStyle={'emphasis'}>{carId}</Text>
              <Spacer />
              <Image
              className='detailPageStyleImage'
              src="/images/xc40_recharge.jpg"
              alt={carId}
              width={200}
              height={50}
              />
          </Card> 
      </Flex> 
    </div>
  );
}