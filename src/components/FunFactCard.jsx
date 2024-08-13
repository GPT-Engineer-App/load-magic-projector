import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const FunFactCard = ({ fact }) => {
  return (
    <Card>
      <CardContent className="p-4">
        <p className="text-lg font-semibold">{fact}</p>
      </CardContent>
    </Card>
  );
};

export default FunFactCard;