# Ingest the data
from llama_index.core import SimpleDirectoryReader, VectorStoreIndex
import os.path
import urllib.request

file_url = "https://ws-assets-prod-iad-r-pdx-f3b3f9f1a7d6a3d0.s3.us-west-2.amazonaws.com/26c6c1a1-195e-4b01-847f-69c857425161/labs/skywing.pdf"
file_name = "skywing.pdf"
file_directory = "./data"
file_path = f"{file_directory}/{file_name}"

if not os.path.isfile(file_path):
    if not os.path.isdir(file_directory):
        os.mkdir(file_directory)
    urllib.request.urlretrieve(file_url, file_path)

documents = SimpleDirectoryReader(file_directory).load_data() # read the files in the data directory

# print(documents) # print the contents of the files

# Index the data
from llama_index.embeddings.huggingface import HuggingFaceEmbedding
from llama_index.core import Settings

Settings.embed_model = HuggingFaceEmbedding(
    model_name="BAAI/bge-small-en-v1.5"
) # load an embedding model from HuggingFace instead of OpenAI

index = VectorStoreIndex.from_documents(documents, show_progress=True) # index the documents we loaded

print(len(index.docstore.docs)) # print the length of the index

