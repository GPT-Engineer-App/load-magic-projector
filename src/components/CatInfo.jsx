import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CatInfo = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Behavior</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Cats are known for their independent nature, playfulness, and curiosity. They communicate through vocalizations, body language, and scent marking.</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Lifespan</CardTitle>
        </CardHeader>
        <CardContent>
          <p>The average lifespan of a domestic cat is 12-18 years, although some cats have been known to live into their 20s with proper care and nutrition.</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Senses</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Cats have excellent night vision, acute hearing, and a highly developed sense of smell. Their whiskers are sensitive to vibrations and help them navigate in the dark.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default CatInfo;