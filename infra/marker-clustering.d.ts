/**
 * Copyright 2016 NAVER Corp.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * 마커 클러스터링을 정의합니다.
 * @param {Object} options 마커 클러스터링 옵션
 */
export declare class MarkerClustering {
  constructor(options: any);
  DEFAULT_OPTIONS: {
    map: any;
    markers: any[];
    disableClickZoom: boolean;
    minClusterSize: number;
    maxZoom: number;
    gridSize: number;
    icons: any[];
    indexGenerator: number[];
    averageCenter: boolean;
    stylingFunction: () => void;
  };
  _clusters: any[];
  _mapRelations: any;
  _markerRelations: any[];
}
/**
 * 마커를 가지고 있는 클러스터를 정의합니다.
 * @param {MarkerClustering} markerClusterer
 */
export declare class Cluster {
  constructor(markerClusterer: any);
  _clusterCenter: any;
  _clusterBounds: any;
  _clusterMarker: any;
  _relation: any;
  _clusterMember: any[];
  _markerClusterer: any;
}
