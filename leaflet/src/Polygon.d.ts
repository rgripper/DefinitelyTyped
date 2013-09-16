


declare module L {
    export class Polygon extends Polyline {
        /**
          * Instantiates a polygon object given an array of geographical points and
          * optionally an options object (the same as for Polyline). You can also create
          * a polygon with holes by passing an array of arrays of latlngs, with the first
          * latlngs array representing the exterior ring while the remaining represent
          * the holes inside.
          */
        constructor(latlngs: LatLng[], options?: PolylineOptions);
    
    }
} 
 
 
