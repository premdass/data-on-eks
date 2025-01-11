"use strict";(self.webpackChunkdoeks_website=self.webpackChunkdoeks_website||[]).push([[5917],{5234:(e,a,s)=>{s.d(a,{Ay:()=>i,RM:()=>r});var t=s(4848),n=s(8453);const r=[];function l(e){const a={code:"code",em:"em",p:"p",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.p,{children:["Once our sample data is uploaded you can run the Spark job. You will need to\nreplace the ",(0,t.jsx)(a.em,{children:"<S3_BUCKET>"})," placeholders in this file with the name of the bucket\ncreated earlier. You can get that value by running ",(0,t.jsx)(a.code,{children:"echo $S3_BUCKET"}),"."]}),"\n",(0,t.jsx)(a.p,{children:"To do this automatically you can run the following, which will create a .old\nbackup file and do the replacement for you."})]})}function i(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},1825:(e,a,s)=>{s.d(a,{Ay:()=>i,RM:()=>r});var t=s(4848),n=s(8453);const r=[];function l(e){const a={code:"code",em:"em",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.p,{children:["Run the ",(0,t.jsx)(a.em,{children:"taxi-trip-execute.sh"})," script with the following input. You will use the ",(0,t.jsx)(a.em,{children:"S3_BUCKET"})," variable created earlier. Additionally, you must change YOUR_REGION_HERE with the region of your choice, ",(0,t.jsx)(a.em,{children:"us-west-2"})," for example."]}),"\n",(0,t.jsx)(a.p,{children:"This script will download some example taxi trip data and create duplicates of\nit in order to increase the size a bit. This will take a bit of time and will\nrequire a relatively fast internet connection."}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"cd ${DOEKS_HOME}/analytics/scripts/\nchmod +x taxi-trip-execute.sh\ntaxi-trip-execute.sh ${S3_BUCKET} YOUR_REGION_HERE\n"})}),"\n",(0,t.jsx)(a.p,{children:"You can return to the blueprint directory and continue with the example"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"cd ${DOEKS_HOME}/analytics/terraform/spark-k8s-operator\n"})})]})}function i(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},9198:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var t=s(4848),n=s(8453),r=(s(1470),s(9365),s(2450));s(1825),s(5234),s(1432);const l={sidebar_position:4,sidebar_label:"S3 Tables with EKS",hide_table_of_contents:!0},i="S3 Tables with Amazon EKS",o={id:"blueprints/data-analytics/spark-operator-s3tables",title:"S3 Tables with Amazon EKS",description:"s3tables",source:"@site/docs/blueprints/data-analytics/spark-operator-s3tables.md",sourceDirName:"blueprints/data-analytics",slug:"/blueprints/data-analytics/spark-operator-s3tables",permalink:"/data-on-eks/docs/blueprints/data-analytics/spark-operator-s3tables",draft:!1,unlisted:!1,editUrl:"https://github.com/awslabs/data-on-eks/blob/main/website/docs/blueprints/data-analytics/spark-operator-s3tables.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"S3 Tables with EKS",hide_table_of_contents:!0},sidebar:"blueprints",previous:{title:"Spark Operator on EKS with IPv6",permalink:"/data-on-eks/docs/blueprints/data-analytics/spark-eks-ipv6"},next:{title:"Spark Observability on EKS",permalink:"/data-on-eks/docs/blueprints/data-analytics/observability-spark-on-eks"}},c={},d=[{value:"What is S3 Tables?",id:"what-is-s3-tables",level:2},{value:"Why Run S3 Tables on Amazon EKS?",id:"why-run-s3-tables-on-amazon-eks",level:2},{value:"How S3 Tables Differ from Iceberg Table Format",id:"how-s3-tables-differ-from-iceberg-table-format",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Deploy",id:"deploy",level:3},{value:"Execute Sample Spark job",id:"execute-sample-spark-job",level:2},{value:"Step 1: Create the S3 Tables compatible Apache Spark Docker Image",id:"step-1-create-the-s3-tables-compatible-apache-spark-docker-image",level:3},{value:"Step 2: Create Test Data for the job",id:"step-2-create-test-data-for-the-job",level:3},{value:"Step 3: Upload Test Input data to Amazon S3 Bucket",id:"step-3-upload-test-input-data-to-amazon-s3-bucket",level:3},{value:"Step 4: Upload PySpark Script to S3 Bucket",id:"step-4-upload-pyspark-script-to-s3-bucket",level:3},{value:"Step 5: Create Amazon S3 Table",id:"step-5-create-amazon-s3-table",level:3},{value:"Step 6: Update Spark Operator YAML File",id:"step-6-update-spark-operator-yaml-file",level:3},{value:"Step 7: Execute Spark Job",id:"step-7-execute-spark-job",level:3},{value:"Step 8: Verify the Spark Driver log for the output",id:"step-8-verify-the-spark-driver-log-for-the-output",level:3},{value:"Verify the S3Table using S3Table API",id:"verify-the-s3table-using-s3table-api",level:3},{value:"Monitor the table maintenance job status:",id:"monitor-the-table-maintenance-job-status",level:3},{value:"Delete the S3 Table",id:"delete-the-s3-table",level:2},{value:"Delete the namespace",id:"delete-the-namespace",level:2},{value:"Delete the bucket table",id:"delete-the-bucket-table",level:2},{value:"Delete the EKS cluster",id:"delete-the-eks-cluster",level:2}];function p(e){const a={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.header,{children:(0,t.jsx)(a.h1,{id:"s3-tables-with-amazon-eks",children:"S3 Tables with Amazon EKS"})}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"s3tables",src:s(6956).A+"",width:"1330",height:"694"})}),"\n",(0,t.jsx)(a.h2,{id:"what-is-s3-tables",children:"What is S3 Tables?"}),"\n",(0,t.jsx)(a.p,{children:"Amazon S3 Tables is a fully managed tabular data store purpose-built to optimize performance, simplify security, and provide cost-efficient storage for large-scale analytics workloads. It integrates directly with services like Amazon EMR, Amazon Athena, Amazon Redshift, AWS Glue, and AWS Lake Formation, offering a seamless experience for running analytics and machine learning workloads."}),"\n",(0,t.jsx)(a.h2,{id:"why-run-s3-tables-on-amazon-eks",children:"Why Run S3 Tables on Amazon EKS?"}),"\n",(0,t.jsx)(a.p,{children:"For users who have adopted Amazon EKS for Spark workloads and are using table formats like Iceberg, leveraging S3 Tables offers advantages in performance, cost-efficiency, and security controls. This integration allows organizations to combine Kubernetes-native features with the capabilities of S3 Tables, potentially improving query performance and resource scaling within their existing environment. By following the steps detailed in this document, users can seamlessly integrate S3 Tables into their EKS setup, providing a flexible and complementary solution for analytics workloads."}),"\n",(0,t.jsx)(a.h2,{id:"how-s3-tables-differ-from-iceberg-table-format",children:"How S3 Tables Differ from Iceberg Table Format"}),"\n",(0,t.jsx)(a.p,{children:"While S3 Tables use Apache Iceberg as an underlying implementation, they offer enhanced capabilities specifically designed for AWS customers:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"\ud83d\udee0\ufe0f Automatic Compaction"}),": S3 Tables implements automatic compaction, which intelligently optimizes data storage in the background by combining smaller files into larger, more efficient ones. This process reduces storage costs, improves query speed, and operates continuously without manual intervention."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:["\ud83d\udd04 ",(0,t.jsx)(a.strong,{children:"Table Maintenance"}),": It offers critical maintenance tasks like snapshot management and unreferenced file removal. This continuous optimization ensures that tables remain performant and cost-effective without manual intervention, reducing operational overhead and allowing teams to focus on data insights."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:["\u2744\ufe0f ",(0,t.jsx)(a.strong,{children:"Apache Iceberg Support"}),": Offers built-in support for Apache Iceberg, which simplifies managing data lakes at scale while improving query performance and reducing costs. Consider using S3 Tables for your data lake if you want to experience the following results."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:["\ud83d\udd12 ",(0,t.jsx)(a.strong,{children:"Simplified Security"}),": S3 Tables treat your tables as AWS resources, enabling fine-grained AWS Identity and Access Management (IAM) permissions at the table level. This simplifies data governance, enhances security, and makes access control more intuitive and manageable with your familiar AWS services."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:["\u26a1 ",(0,t.jsx)(a.strong,{children:"Enhanced Performance"}),": Amazon S3 Tables introduce a new type of bucket, purpose-built for storing Apache Iceberg tables. Table buckets deliver up to 3x faster query performance and up to 10x higher transactions per second compared to storing Iceberg tables in general-purpose S3 buckets. This performance enhancement supports high-frequency updates, real-time ingestion, and more demanding workloads, ensuring scalability and responsiveness as data volumes grow."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:["\ud83d\udee0\ufe0f ",(0,t.jsx)(a.strong,{children:"Integration with AWS Services"}),": S3 Tables are tightly integrated with AWS analytics services such as Athena, Redshift, EMR, and Glue, providing native support for analytics workloads."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(r.A,{header:(0,t.jsx)(a.h2,{children:(0,t.jsx)(a.span,{children:"Deploying the Solution"})}),children:[(0,t.jsxs)(a.p,{children:["In this ",(0,t.jsx)(a.a,{href:"https://github.com/awslabs/data-on-eks/tree/main/analytics/terraform/spark-k8s-operator",children:"example"}),", you will provision the following resources required to run Spark Jobs with open source Spark Operator and Apache YuniKorn."]}),(0,t.jsx)(a.p,{children:"This example deploys an EKS Cluster running the Spark K8s Operator into a new VPC."}),(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"Creates a new sample VPC, 2 Private Subnets, 2 Public Subnets, and 2 subnets in the RFC6598 space (100.64.0.0/10) for EKS Pods."}),"\n",(0,t.jsx)(a.li,{children:"Creates Internet gateway for Public Subnets and NAT Gateway for Private Subnets"}),"\n",(0,t.jsx)(a.li,{children:"Creates EKS Cluster Control plane with public endpoint (for demo reasons only) with Managed Node Groups for benchmarking and core services, and Karpenter NodePools for Spark workloads."}),"\n",(0,t.jsx)(a.li,{children:"Deploys Metrics server, Spark-operator, Apache Yunikorn, Karpenter, Grafana and Prometheus server."}),"\n"]}),(0,t.jsx)(a.h3,{id:"prerequisites",children:"Prerequisites"}),(0,t.jsx)(a.p,{children:"Ensure that you have installed the following tools on your machine."}),(0,t.jsxs)(a.ol,{children:["\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html",children:"aws cli"})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"https://Kubernetes.io/docs/tasks/tools/",children:"kubectl"})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"https://learn.hashicorp.com/tutorials/terraform/install-cli",children:"terraform"})}),"\n"]}),(0,t.jsx)(a.h3,{id:"deploy",children:"Deploy"}),(0,t.jsx)(a.p,{children:"Clone the repository."}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"git clone https://github.com/awslabs/data-on-eks.git\ncd data-on-eks\nexport DOEKS_HOME=$(pwd)\n"})}),(0,t.jsxs)(a.p,{children:["If DOEKS_HOME is ever unset, you can always set it manually using ",(0,t.jsx)(a.code,{children:"export DATA_ON_EKS=$(pwd)"})," from your data-on-eks directory."]}),(0,t.jsxs)(a.p,{children:["Navigate into one of the example directories and run ",(0,t.jsx)(a.code,{children:"install.sh"})," script."]}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"cd ${DOEKS_HOME}/analytics/terraform/spark-k8s-operator\nchmod +x install.sh\n./install.sh\n"})}),(0,t.jsxs)(a.p,{children:["Now create an ",(0,t.jsx)(a.code,{children:"S3_BUCKET"})," variable that holds the name of the bucket created\nduring the install. This bucket will be used in later examples to store output\ndata. If S3_BUCKET is ever unset, you can run the following commands again."]}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"export S3_BUCKET=$(terraform output -raw s3_bucket_id_spark_history_server)\necho $S3_BUCKET\n"})})]}),"\n",(0,t.jsx)(a.h2,{id:"execute-sample-spark-job",children:"Execute Sample Spark job"}),"\n",(0,t.jsx)(a.h3,{id:"step-1-create-the-s3-tables-compatible-apache-spark-docker-image",children:"Step 1: Create the S3 Tables compatible Apache Spark Docker Image"}),"\n",(0,t.jsx)(a.p,{children:"Create a Docker image with necessary jars for S3 tables communication."}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["Review the sample ",(0,t.jsx)(a.a,{href:"https://github.com/awslabs/data-on-eks/blob/main/analytics/terraform/spark-k8s-operator/examples/s3-tables/Dockerfile-S3Table",children:"Dockerfile"})]}),"\n",(0,t.jsxs)(a.li,{children:["Note the ",(0,t.jsx)(a.a,{href:"https://github.com/awslabs/data-on-eks/blob/e3f1a6b08d719fc69f61d18b57cd5ad09cb01bd5/analytics/terraform/spark-k8s-operator/examples/s3-tables/Dockerfile-S3Table#L43C1-L48C1",children:"key jar files"})," for S3 Tables interaction, including Iceberg, AWS SDK bundle, and S3 Tables Catalog for Iceberg runtime"]}),"\n",(0,t.jsx)(a.li,{children:"Customize the Dockerfile as needed for your environment"}),"\n",(0,t.jsx)(a.li,{children:"Build the Docker image and push the image to your preferred container registry"}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:"We have created a docker image and published in ECR for the demo purpose only."}),"\n",(0,t.jsx)(a.h3,{id:"step-2-create-test-data-for-the-job",children:"Step 2: Create Test Data for the job"}),"\n",(0,t.jsxs)(a.p,{children:["Navigate to the example directory and generate sample employee data for Spark job input using this ",(0,t.jsx)(a.a,{href:"https://github.com/awslabs/data-on-eks/blob/main/analytics/terraform/spark-k8s-operator/examples/s3-tables/input-data-gen.sh",children:"shell"})," script."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-sh",children:"cd analytics/terraform/spark-k8s-operator/examples/s3-tables\n./input-data-gen.sh\n"})}),"\n",(0,t.jsxs)(a.p,{children:["This script will create a file named ",(0,t.jsx)(a.code,{children:"employee_data.csv"})," in your current directory. By default, it generates 100 records."]}),"\n",(0,t.jsx)(a.p,{children:"Note: If you need to adjust the number of records, you can modify the input-data-gen.sh script. Look for the loop that generates the data and change the iteration count as needed."}),"\n",(0,t.jsx)(a.h3,{id:"step-3-upload-test-input-data-to-amazon-s3-bucket",children:"Step 3: Upload Test Input data to Amazon S3 Bucket"}),"\n",(0,t.jsxs)(a.p,{children:["Replace ",(0,t.jsx)(a.code,{children:"<YOUR_S3_BUCKET>"})," with the name of the S3 bucket created by your blueprint and run the below command."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"aws s3 cp employee_data.csv s3://<S3_BUCKET>/s3table-example/input/\n"})}),"\n",(0,t.jsx)(a.p,{children:"This command will upload the CSV file to your S3 bucket. The Spark job will later reference this path to read the input data. Ensure you have the necessary permissions to write to this bucket before executing the command."}),"\n",(0,t.jsx)(a.h3,{id:"step-4-upload-pyspark-script-to-s3-bucket",children:"Step 4: Upload PySpark Script to S3 Bucket"}),"\n",(0,t.jsxs)(a.p,{children:["The following script is the snippet of the ",(0,t.jsx)(a.a,{href:"https://github.com/awslabs/data-on-eks/blob/main/analytics/terraform/spark-k8s-operator/examples/s3-tables/s3table-iceberg-pyspark.py",children:"Spark job"})," where you can see the Spark config required to work with S3 Tables."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:'def main(args):\n    if len(args) != 3:\n        logger.error("Usage: spark-etl [input-csv-path] [s3table-arn]")\n        sys.exit(1)\n\n    # Input parameters\n    input_csv_path = args[1]    # Path to the input CSV file\n    s3table_arn = args[2]       # s3table arn\n\n    # Initialize Spark session\n    logger.info("Initializing Spark Session")\n    spark = (SparkSession\n             .builder\n             .appName(f"{AppName}_{dt_string}")\n             .config("spark.sql.extensions", "org.apache.iceberg.spark.extensions.IcebergSparkSessionExtensions")\n             .config("spark.sql.catalog.s3tablesbucket", "org.apache.iceberg.spark.SparkCatalog")\n             .config("spark.sql.catalog.s3tablesbucket.catalog-impl", "software.amazon.s3tables.iceberg.S3TablesCatalog")\n             .config("spark.sql.catalog.s3tablesbucket.warehouse", s3table_arn)\n             .config(\'spark.hadoop.fs.s3.impl\', "org.apache.hadoop.fs.s3a.S3AFileSystem")\n             .config("spark.sql.defaultCatalog", "s3tablesbucket")\n             .getOrCreate())\n\n    spark.sparkContext.setLogLevel("INFO")\n    logger.info("Spark session initialized successfully")\n\n    namespace = "doeks_namespace"\n    table_name = "employee_s3_table"\n    full_table_name = f"s3tablesbucket.{namespace}.{table_name}"\n\n...\n\n'})}),"\n",(0,t.jsxs)(a.p,{children:["Replace ",(0,t.jsx)(a.code,{children:"S3_BUCKET"})," with the name of the S3 bucket created by your blueprint and run the below command to upload sample ",(0,t.jsx)(a.a,{href:"https://github.com/awslabs/data-on-eks/blob/main/analytics/terraform/spark-k8s-operator/examples/s3-tables/s3table-iceberg-pyspark.py",children:"Spark job"})," to S3 buckets."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"aws s3 cp s3table-iceberg-pyspark.py s3://<S3_BUCKET>/s3table-example/scripts/\n"})}),"\n",(0,t.jsx)(a.p,{children:"Navigate to example directory and submit the Spark job."}),"\n",(0,t.jsx)(a.h3,{id:"step-5-create-amazon-s3-table",children:"Step 5: Create Amazon S3 Table"}),"\n",(0,t.jsx)(a.p,{children:"This is the main step where you will create an S3 bucket that will be used for S3 Tables, which your PySpark job will access later."}),"\n",(0,t.jsxs)(a.p,{children:["Replace ",(0,t.jsx)(a.code,{children:"<S3TABLE_BUCKET_NAME>"})," with your desired bucket name. Replace ",(0,t.jsx)(a.code,{children:"<REGION>"})," with your AWS region."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:'aws s3tables create-table-bucket \\\n    --region "<REGION>" \\\n    --name "<S3TABLE_BUCKET_NAME>"\n'})}),"\n",(0,t.jsx)(a.p,{children:"Make note of the S3TABLE ARN generated by this command. Verify the S3 Table ARN from AWS Console."}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"alt text",src:s(2634).A+"",width:"3054",height:"1100"})}),"\n",(0,t.jsx)(a.h3,{id:"step-6-update-spark-operator-yaml-file",children:"Step 6: Update Spark Operator YAML File"}),"\n",(0,t.jsx)(a.p,{children:"Update the Spark Operator YAML file as below:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["Open ",(0,t.jsx)(a.a,{href:"https://github.com/awslabs/data-on-eks/blob/main/analytics/terraform/spark-k8s-operator/examples/s3-tables/s3table-spark-operator.yaml",children:"s3table-spark-operator.yaml"})," file in your preferred text editor."]}),"\n",(0,t.jsxs)(a.li,{children:["Replace ",(0,t.jsx)(a.code,{children:"<S3_BUCKET>"})," with your S3 bucket created by this blueprint(Check Terraform outputs). S3 Bucket is the place where you copied test data and sample spark job in the above steps."]}),"\n",(0,t.jsxs)(a.li,{children:["REPLACE ",(0,t.jsx)(a.code,{children:"<S3TABLE_ARN>"})," with your S3 Table ARN captured in the previous step."]}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:"You can see the snippet of Spark Operator Job config below."}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-yaml",children:'---\napiVersion: "sparkoperator.k8s.io/v1beta2"\nkind: SparkApplication\nmetadata:\n  name: "s3table-example"\n  namespace: spark-team-a\n  labels:\n    app: "s3table-example"\n    applicationId: "s3table-example-nvme"\nspec:\n  type: Python\n  sparkVersion: "3.5.3"\n  mode: cluster\n  # CAUTION: Unsupported test image\n  # This image is created solely for testing and reference purposes.\n  # Before use, please:\n  # 1. Review the Dockerfile used to create this image\n  # 2. Create your own image that meets your organization\'s security requirements\n  image: "public.ecr.aws/data-on-eks/spark:3.5.3-scala2.12-java17-python3-ubuntu-s3table0.1.3-iceberg1.6.1"\n  imagePullPolicy: IfNotPresent\n  mainApplicationFile: "s3a://<S3_BUCKET>/s3table-example/scripts/s3table-iceberg-pyspark.py"\n  arguments:\n    - "s3a://<S3_BUCKET>/s3table-example/input/"\n    - "<S3TABLE_ARN>"\n  sparkConf:\n    "spark.app.name": "s3table-example"\n    "spark.kubernetes.driver.pod.name": "s3table-example"\n    "spark.kubernetes.executor.podNamePrefix": "s3table-example"\n    "spark.local.dir": "/data"\n    "spark.speculation": "false"\n    "spark.network.timeout": "2400"\n    "spark.hadoop.fs.s3a.connection.timeout": "1200000"\n    "spark.hadoop.fs.s3a.path.style.access": "true"\n    "spark.hadoop.fs.s3a.connection.maximum": "200"\n    "spark.hadoop.fs.s3a.fast.upload": "true"\n    "spark.hadoop.fs.s3a.readahead.range": "256K"\n    "spark.hadoop.fs.s3a.input.fadvise": "random"\n    "spark.hadoop.fs.s3a.aws.credentials.provider.mapping": "com.amazonaws.auth.WebIdentityTokenCredentialsProvider=software.amazon.awssdk.auth.credentials.WebIdentityTokenFileCredentialsProvider"\n    "spark.hadoop.fs.s3a.aws.credentials.provider": "software.amazon.awssdk.auth.credentials.WebIdentityTokenFileCredentialsProvider"  # AWS SDK V2 https://hadoop.apache.org/docs/stable/hadoop-aws/tools/hadoop-aws/aws_sdk_upgrade.html\n...\n\n'})}),"\n",(0,t.jsx)(a.h3,{id:"step-7-execute-spark-job",children:"Step 7: Execute Spark Job"}),"\n",(0,t.jsx)(a.p,{children:"Apply the updated YAML configuration file to your Kubernetes cluster to submit and execute the Spark job:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"cd ${DOEKS_HOME}/analytics/terraform/spark-k8s-operator/examples/s3-tables\nkubectl apply -f s3table-spark-operator.yaml\n"})}),"\n",(0,t.jsx)(a.p,{children:"This will schedule the Spark job on the EKS cluster. Spark Operator handles submitting the job to the Kubernetes API Server."}),"\n",(0,t.jsx)(a.p,{children:"Kubernetes will schedule the Spark driver and executor pods to run on separate worker nodes. Karpenter will automatically provision new nodes if required, based on the nodepool configuration in the Terraform scripts."}),"\n",(0,t.jsxs)(a.p,{children:["Monitor the logs of the Spark driver pod to track job progress. The pods default to ",(0,t.jsx)(a.code,{children:"c5d"})," instances, but you can modify the YAML and Karpenter nodepool to use different EC2 instance types if needed."]}),"\n",(0,t.jsx)(a.h3,{id:"step-8-verify-the-spark-driver-log-for-the-output",children:"Step 8: Verify the Spark Driver log for the output"}),"\n",(0,t.jsx)(a.p,{children:"List the pods running under the spark-team-a namespace:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"kubectl get pods -n spark-team-a\n"})}),"\n",(0,t.jsx)(a.p,{children:"Verify the driver logs to see the full output of the Spark job. The job reads the CSV data from the S3 bucket and writes it back to the S3 Tables bucket using the Iceberg format. It also counts the number of records processed and displays the first 10 records:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"kubectl logs <spark-driver-pod-name> -n spark-team-a\n"})}),"\n",(0,t.jsxs)(a.p,{children:["You should see the Spark driver pod transition to a ",(0,t.jsx)(a.code,{children:"Succeeded"})," state when the job completes successfully and the log should show output like below."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-text",children:"...\n[2025-01-07 22:07:44,185] INFO @ line 59: Previewing employee data schema\nroot\n |-- id: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- level: string (nullable = true)\n |-- salary: double (nullable = true)\n\n....\n\n25/01/07 22:07:44 INFO CodeGenerator: Code generated in 10.594982 ms\n+---+-----------+------+--------+\n|id |name       |level |salary  |\n+---+-----------+------+--------+\n|1  |Employee_1 |Mid   |134000.0|\n|2  |Employee_2 |Senior|162500.0|\n|3  |Employee_3 |Senior|174500.0|\n|4  |Employee_4 |Exec  |69500.0 |\n|5  |Employee_5 |Senior|54500.0 |\n|6  |Employee_6 |Mid   |164000.0|\n|7  |Employee_7 |Junior|119000.0|\n|8  |Employee_8 |Senior|54500.0 |\n|9  |Employee_9 |Senior|57500.0 |\n|10 |Employee_10|Mid   |152000.0|\n+---+-----------+------+--------+\nonly showing top 10 rows\n\n....\n"})}),"\n",(0,t.jsx)(a.p,{children:"You should see a new Table and Namespace once the job is successful as shown in the image below."}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"alt text",src:s(5497).A+"",width:"3270",height:"896"})}),"\n",(0,t.jsx)(a.p,{children:"The following commands will show the additional information on the S3 Tables."}),"\n",(0,t.jsx)(a.h3,{id:"verify-the-s3table-using-s3table-api",children:"Verify the S3Table using S3Table API"}),"\n",(0,t.jsxs)(a.p,{children:["Use the S3Table API to confirm the table was created successfully. Just replace the ",(0,t.jsx)(a.code,{children:"<ACCOUNT_ID>"})," and run the command."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"aws s3tables get-table --table-bucket-arn arn:aws:s3tables:<REGION>:<ACCOUNT_ID>:bucket/doeks-spark-on-eks-s3table \\\n--namespace doeks_namespace \\\n--name employee_s3_table\n"})}),"\n",(0,t.jsx)(a.p,{children:"Output looks like below:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-text",children:'Output looks like below.\n\n{\n    "name": "employee_s3_table",\n    "type": "customer",\n    "tableARN": "arn:aws:s3tables:us-west-2:<ACCOUNT_ID>:bucket/doeks-spark-on-eks-s3table/table/55511111-7a03-4513-b921-e372b0030daf",\n    "namespace": [\n        "doeks_namespace"\n    ],\n    "versionToken": "aafc39ddd462690d2a0c",\n    "metadataLocation": "s3://55511111-7a03-4513-asdfsafdsfdsf--table-s3/metadata/00004-62cc4be3-59b5-4647-a78d-1cdf69ec5ed8.metadata.json",\n    "warehouseLocation": "s3://55511111-7a03-4513-asdfsafdsfdsf--table-s3",\n    "createdAt": "2025-01-07T22:14:48.689581+00:00",\n    "createdBy": "<ACCOUNT_ID>",\n    "modifiedAt": "2025-01-09T00:06:09.222917+00:00",\n    "ownerAccountId": "<ACCOUNT_ID>",\n    "format": "ICEBERG"\n}\n'})}),"\n",(0,t.jsx)(a.h3,{id:"monitor-the-table-maintenance-job-status",children:"Monitor the table maintenance job status:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:'aws s3tables get-table-maintenance-job-status --table-bucket-arn arn:aws:s3tables:us-west-2:"\\<ACCOUNT_ID>:bucket/doeks-spark-on-eks-s3table --namespace doeks_namespace --name employee_s3_table\n'})}),"\n",(0,t.jsx)(a.p,{children:"This command provides information about Iceberg compaction, snapshot management, and unreferenced file removal processes."}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-json",children:'{\n    "tableARN": "arn:aws:s3tables:us-west-2:<ACCOUNT_ID>:bucket/doeks-spark-on-eks-s3table/table/55511111-7a03-4513-b921-e372b0030daf",\n    "status": {\n        "icebergCompaction": {\n            "status": "Successful",\n            "lastRunTimestamp": "2025-01-08T01:18:08.857000+00:00"\n        },\n        "icebergSnapshotManagement": {\n            "status": "Successful",\n            "lastRunTimestamp": "2025-01-08T22:17:08.811000+00:00"\n        },\n        "icebergUnreferencedFileRemoval": {\n            "status": "Successful",\n            "lastRunTimestamp": "2025-01-08T22:17:10.377000+00:00"\n        }\n    }\n}\n\n'})}),"\n",(0,t.jsxs)(a.admonition,{type:"info",children:[(0,t.jsx)(a.p,{children:"To work with S3 Tables on EKS, both Node-level policies and Pod-level policies are required."}),(0,t.jsxs)(a.ol,{children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"Node-level policies"}),": These are added to the Karpenter Node IAM role. For reference, you can view the permissions configuration in the ",(0,t.jsx)(a.a,{href:"https://github.com/awslabs/data-on-eks/blob/e3f1a6b08d719fc69f61d18b57cd5ad09cb01bd5/analytics/terraform/spark-k8s-operator/addons.tf#L649C1-L687C5",children:"addons.tf"})," file."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"Pod-level policies"}),": These are necessary for creating namespaces, managing tables, and reading/writing data to the tables. ",(0,t.jsx)(a.a,{href:"https://github.com/awslabs/data-on-eks/blob/e3f1a6b08d719fc69f61d18b57cd5ad09cb01bd5/analytics/terraform/spark-k8s-operator/main.tf#L98C1-L156C2",children:"https://github.com/awslabs/data-on-eks/blob/e3f1a6b08d719fc69f61d18b57cd5ad09cb01bd5/analytics/terraform/spark-k8s-operator/main.tf#L98C1-L156C2"})," are granted through IAM Roles for Service Accounts (IRSA) for the ",(0,t.jsx)(a.code,{children:"spark-team-a"})," namespace. This ensures that the Spark job pods have the required access to perform operations on S3 Tables."]}),"\n"]}),"\n"]}),(0,t.jsx)(a.p,{children:"By configuring these permissions appropriately, you can ensure seamless execution of Spark jobs and secure access to resources."}),(0,t.jsx)(a.p,{children:"Please note that these policies can further be adjusted and make it more granular based on your security requirements."})]}),"\n",(0,t.jsxs)(r.A,{header:(0,t.jsx)(a.h2,{children:(0,t.jsx)(a.span,{children:"Cleanup"})}),children:[(0,t.jsx)(a.admonition,{type:"caution",children:(0,t.jsx)(a.p,{children:"To avoid unwanted charges to your AWS account, delete all the AWS resources created during this deployment"})}),(0,t.jsx)(a.h2,{id:"delete-the-s3-table",children:"Delete the S3 Table"}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"aws s3tables delete-table \\\n  --namespace doeks_namespace \\\n  --table-bucket-arn ${S3TABLE_ARN} \\\n  --name employee_s3_table\n"})}),(0,t.jsx)(a.h2,{id:"delete-the-namespace",children:"Delete the namespace"}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"aws s3tables delete-namespace \\\n  --namespace doeks_namespace \\\n  --table-bucket-arn ${S3TABLE_ARN}\n"})}),(0,t.jsx)(a.h2,{id:"delete-the-bucket-table",children:"Delete the bucket table"}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:'aws s3tables delete-table-bucket \\\n  --region "<REGION>" \\\n  --table-bucket-arn ${S3TABLE_ARN}\n'})}),(0,t.jsx)(a.h2,{id:"delete-the-eks-cluster",children:"Delete the EKS cluster"}),(0,t.jsxs)(a.p,{children:["This script will cleanup the environment using ",(0,t.jsx)(a.code,{children:"-target"})," option to ensure all the resources are deleted in correct order."]}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"cd ${DOEKS_HOME}/analytics/terraform/spark-k8s-operator && chmod +x cleanup.sh\n./cleanup.sh\n"})})]})]})}function h(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},9365:(e,a,s)=>{s.d(a,{A:()=>l});s(6540);var t=s(4164);const n={tabItem:"tabItem_Ymn6"};var r=s(4848);function l(e){let{children:a,hidden:s,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.A)(n.tabItem,l),hidden:s,children:a})}},1470:(e,a,s)=>{s.d(a,{A:()=>S});var t=s(6540),n=s(4164),r=s(3104),l=s(6347),i=s(205),o=s(7485),c=s(1682),d=s(679);function p(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:a,children:s}=e;return(0,t.useMemo)((()=>{const e=a??function(e){return p(e).map((e=>{let{props:{value:a,label:s,attributes:t,default:n}}=e;return{value:a,label:s,attributes:t,default:n}}))}(s);return function(e){const a=(0,c.XI)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,s])}function u(e){let{value:a,tabValues:s}=e;return s.some((e=>e.value===a))}function b(e){let{queryString:a=!1,groupId:s}=e;const n=(0,l.W6)(),r=function(e){let{queryString:a=!1,groupId:s}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:a,groupId:s});return[(0,o.aZ)(r),(0,t.useCallback)((e=>{if(!r)return;const a=new URLSearchParams(n.location.search);a.set(r,e),n.replace({...n.location,search:a.toString()})}),[r,n])]}function m(e){const{defaultValue:a,queryString:s=!1,groupId:n}=e,r=h(e),[l,o]=(0,t.useState)((()=>function(e){let{defaultValue:a,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!u({value:a,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const t=s.find((e=>e.default))??s[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:a,tabValues:r}))),[c,p]=b({queryString:s,groupId:n}),[m,f]=function(e){let{groupId:a}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(a),[n,r]=(0,d.Dv)(s);return[n,(0,t.useCallback)((e=>{s&&r.set(e)}),[s,r])]}({groupId:n}),g=(()=>{const e=c??m;return u({value:e,tabValues:r})?e:null})();(0,i.A)((()=>{g&&o(g)}),[g]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!u({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),p(e),f(e)}),[p,f,r]),tabValues:r}}var f=s(2303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var k=s(4848);function x(e){let{className:a,block:s,selectedValue:t,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),d=e=>{const a=e.currentTarget,s=o.indexOf(a),n=i[s].value;n!==t&&(c(a),l(n))},p=e=>{let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=o.indexOf(e.currentTarget)+1;a=o[s]??o[0];break}case"ArrowLeft":{const s=o.indexOf(e.currentTarget)-1;a=o[s]??o[o.length-1];break}}a?.focus()};return(0,k.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":s},a),children:i.map((e=>{let{value:a,label:s,attributes:r}=e;return(0,k.jsx)("li",{role:"tab",tabIndex:t===a?0:-1,"aria-selected":t===a,ref:e=>o.push(e),onKeyDown:p,onClick:d,...r,className:(0,n.A)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":t===a}),children:s??a},a)}))})}function j(e){let{lazy:a,children:s,selectedValue:r}=e;const l=(Array.isArray(s)?s:[s]).filter(Boolean);if(a){const e=l.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,k.jsx)("div",{className:"margin-top--md",children:l.map(((e,a)=>(0,t.cloneElement)(e,{key:a,hidden:e.props.value!==r})))})}function y(e){const a=m(e);return(0,k.jsxs)("div",{className:(0,n.A)("tabs-container",g.tabList),children:[(0,k.jsx)(x,{...a,...e}),(0,k.jsx)(j,{...a,...e})]})}function S(e){const a=(0,f.A)();return(0,k.jsx)(y,{...e,children:p(e.children)},String(a))}},2450:(e,a,s)=>{s.d(a,{A:()=>b});var t=s(6540),n=s(5556),r=s.n(n),l=s(4164);const i="collapsibleContent_q3kw",o="header_QCEw",c="icon_PckA",d="content_qLC1",p="expanded_iGsi";var h=s(4848);function u(e){let{children:a,header:s}=e;const[n,r]=(0,t.useState)(!1);return(0,h.jsxs)("div",{className:i,children:[(0,h.jsxs)("div",{className:(0,l.A)(o,{[p]:n}),onClick:()=>{r(!n)},children:[s,(0,h.jsx)("span",{className:(0,l.A)(c,{[p]:n}),children:n?"\ud83d\udc47":"\ud83d\udc48"})]}),n&&(0,h.jsx)("div",{className:d,children:a})]})}u.propTypes={children:r().node.isRequired,header:r().node.isRequired};const b=u},2634:(e,a,s)=>{s.d(a,{A:()=>t});const t=s.p+"assets/images/s3table_bucket-d51564e96fc064ad5d9101afbb760c05.png"},5497:(e,a,s)=>{s.d(a,{A:()=>t});const t=s.p+"assets/images/s3tables-2-01dd11532674f79bc394542c2e386a22.png"},6956:(e,a,s)=>{s.d(a,{A:()=>t});const t=s.p+"assets/images/s3tables-c83dded2e8796851fe97ed89d1abc8e8.png"}}]);