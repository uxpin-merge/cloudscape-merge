import React, { useState } from 'react';
import S3ResourceSelectorBase, {
  S3ResourceSelectorProps
} from '@cloudscape-design/components/s3-resource-selector';

interface Resource {
  uri: string;
  versionId?: string;
}

interface ExtendedS3ResourceSelectorProps {
  fetchBucketObject: Array<object>;
  fetchObjectObject: Array<object>;
  fetchVersionsObject: Array<object>;
}

interface ExtendedS3ResourceSelectorProps extends S3ResourceSelectorProps { }

/**
 * @uxpindocurl https://cloudscape.design/components/s3-resource-selector/
 * @uxpindescription A component that enables users to select S3 resources like buckets, objects, and versions.
 */
const S3ResourceSelector = (props: ExtendedS3ResourceSelectorProps) => {
  const [resource, setResource] = useState<Resource>({
    uri: 's3://bucket-ut/archive-2020/electron-8h.zip',
    versionId: 'f2ef887e-af4c-4003-ad16-153d1419c024',
  });

  return (
    <S3ResourceSelectorBase
      {...props}
      fetchBuckets={() => Promise.resolve(props.fetchBucketObject)}
      fetchObjects={() => Promise.resolve(props.fetchObjectObject)}
      fetchVersions={() => Promise.resolve(props.fetchVersionsObject)}
      onChange={({ detail }) => setResource(detail.resource)}
      resource={resource}
    />
  );
};

export default S3ResourceSelector;
